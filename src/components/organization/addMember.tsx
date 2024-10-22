import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  DialogActions,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dialog from "../common/dialog";
import { addMember, getMembers, removeMember } from "../../utils/constants";
import AddIcon from "@mui/icons-material/Add";
import { ErrorMessage, Form, Formik } from "formik";
import { EmailSchema } from "../../utils/schemas";
import FormTextField from "../common/inputField";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  handleAddMemberData: (email: string, role: string) => void;
}

const AddOrganizationMember: React.FC<ModalProps> = ({
  open,
  onClose,
  handleAddMemberData,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("Member");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentMemberId, setCurrentMemberId] = useState<number | null>(null);
  const openMenu = Boolean(anchorEl);

  const [members, setMembers] = useState(getMembers());
  useEffect(() => {
    setMembers(getMembers());
  }, []);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    memberId: number
  ) => {
    setCurrentMemberId(memberId);
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setCurrentMemberId(null);
  };

  const handleAddMember = (email: string) => {
    addMember(email);
    setMembers(getMembers());
    setSearchQuery(email);
  };

  const handleRemoveMember = (id: number) => {
    removeMember(id);
    setMembers(getMembers());
  };

  const handleChangeRole = (newRole: string) => {
    if (currentMemberId !== null) {
      const memberIndex = members.findIndex(
        (member) => member.id === currentMemberId
      );
      if (memberIndex > -1) {
        members[memberIndex].role = newRole;
        setMembers([...members]);
      }
    }
    setSelectedRole(newRole);
    handleCloseMenu();
  };

  const renderAddMemberContent = () => (
    <React.Fragment>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={EmailSchema}
        onSubmit={(values, { resetForm }) => {
          handleAddMember(values.email);
          resetForm();
        }}
      >
        {({
          isValid,
          dirty,
          values,
          setValues,
          touched,
          errors,
          handleBlur,
        }) => (
          <Form>
            <Box sx={{ position: "relative", mb: 2 }}>
              <FormTextField
                key="email"
                type="text"
                variant="outlined"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={(e) => {
                  setValues({
                    ...values,
                    email: e.target.value,
                  });
                }}
                onBlur={handleBlur}
                error={!!(touched.email && errors.email)}
                sx={{ mb: 0, mt: 0.5 }}
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ display: "block", mt: 0.5, mb: 0 }}
                  >
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>

              {/* Show Add button only when email is valid */}
              {isValid && dirty && (
                <IconButton
                  type="submit"
                  sx={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <AddIcon color="primary" />
                </IconButton>
              )}
            </Box>
          </Form>
        )}
      </Formik>

      {/* Members List */}
      <List>
        {members.map((member) => (
          <ListItem
            key={member.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Left Box with email and icon */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flex: 1,
                }}
              >
                <IconButton
                  onClick={() => handleRemoveMember(member.id)}
                  sx={{ p: 0 }}
                >
                  <RemoveCircleOutlineIcon color="error" />
                </IconButton>{" "}
                <ListItemText primary={member.email} />
              </Box>

              <Box
                sx={{
                  borderLeft: "1px solid #ddd",
                  ml: 4,
                  mr: 2,
                  height: "100%",
                }}
              ></Box>

              {/* Right Box with role and dropdown icon */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography
                  color="primary.main"
                  sx={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {member.role}
                </Typography>
                <IconButton
                  onClick={(event) => handleClick(event, member.id)}
                  sx={{ p: 0, m: 0 }}
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleCloseMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={() => handleChangeRole("Member")}>
                    Member
                  </MenuItem>
                  <MenuItem onClick={() => handleChangeRole("Administrator")}>
                    Administrator
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Add New Organization Member"
      element={
        <React.Fragment>
          {renderAddMemberContent()}
          <DialogActions sx={{ px: 0, mt: 1 }}>
            <Button
              type="submit"
              onClick={() => {
                handleAddMemberData(searchQuery, selectedRole);
                setMembers([]);
              }}
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                padding: "8px 16px",
                fontSize: "0.875rem",
              }}
            >
              Send Invites
            </Button>
          </DialogActions>
        </React.Fragment>
      }
    />
  );
};

export default AddOrganizationMember;
