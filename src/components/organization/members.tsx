"use client";

import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoIcon from "@mui/icons-material/Info";
import DataGrid from "../common/datagrid";
import { addMemberData, MemberData } from "../../utils/constants";
import { GridColDef } from "@mui/x-data-grid";
import AddOrganizationMember from "./addMember";
import ConfirmationDialog from "../common/confirmationDialog";
import UpdateMemberForm from "./updateMember";

interface Member {
  id: number;
  name: string;
  email: string;
  accountType: string;
  since: string;
}

const Members: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(MemberData);
  const [openAddOrgMember, setOpenAddOrgMember] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [openUpdateMemberModal, setOpenUpdateMemberModal] =
    useState<boolean>(false);
  const handleAddMembeData = (email: string, role: string) => {
    addMemberData(email, role);
    setMembers([...MemberData]);
    setOpenAddOrgMember(false);
  };
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => {
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
        const openMenu = Boolean(anchorEl);
        const [memberToDelete, setMemberToDelete] = useState<number | null>(
          null
        );
        const [selectedRows, setSelectedRows] = useState<number[]>([]);
        const [openConfirmDialog, setOpenConfirmDialog] =
          useState<boolean>(false);

        const handleClick = (event: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
          setAnchorEl(null);
        };

        const handleDeleteClick = (id: number) => {
          setMemberToDelete(id);
          setOpenConfirmDialog(true);
        };
        const handleConfirmDelete = () => {
          if (memberToDelete) {
            const updatedMembers = members.filter(
              (member) => member.id !== memberToDelete
            );
            setMembers(updatedMembers);
            setMemberToDelete(null);
          } else if (selectedRows.length > 0) {
            const updatedMembers = members.filter(
              (member) => !selectedRows.includes(member.id)
            );
            setMembers(updatedMembers);
            setSelectedRows([]);
          }
          setOpenConfirmDialog(false);
        };

        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ mt: 1.5 }}>{params.value}</Typography>
            <IconButton onClick={handleClick} sx={{ mr: 2, mt: 1.5, p: 0 }}>
              <MoreHorizIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={() => handleDeleteClick(params.row.id)}>
                Delete
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setSelectedMember(params.row);
                  setOpenUpdateMemberModal(true);
                  handleClose();
                }}
              >
                Update
              </MenuItem>
              <ConfirmationDialog
                open={openConfirmDialog}
                onClose={() => setOpenConfirmDialog(false)}
                onConfirm={handleConfirmDelete}
                title="Warning!!"
                description="Do you want to delete the selected member from the organization?"
              />
            </Menu>
          </Box>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ mt: 1.5 }}>{params.value}</Typography>
        </Box>
      ),
    },
    {
      field: "accountType",
      headerName: "Account Type",
      flex: 1,
      renderHeader: () => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Account Type
          <InfoIcon sx={{ ml: 1, color: "primary.main" }} />
        </Box>
      ),
    },
    {
      field: "since",
      headerName: "Since",
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ mt: 1.5 }}>{params.value}</Typography>
        </Box>
      ),
    },
  ];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    if (selectedRows.length > 0) {
      const updatedMembers = MemberData.filter(
        (member) => !selectedRows.includes(member.id)
      );
      setSelectedRows([]);
      setMembers(updatedMembers);
    }
    handleCloseMenu();
  };
  const handleOpenDeleteDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenConfirmDialog(false);
  };

  const handleConfirmDelete = () => {
    handleDelete();
    handleCloseDeleteDialog();
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
          py: 1,
          px: 4,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mr: 4 }}>
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Manage Members
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1rem", color: "#555" }}
            >
              Manage the members of your organization.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Button
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                borderRadius: "15px",
                minWidth: "auto",
                px: 2,
              }}
              onClick={() => setOpenAddOrgMember(true)}
            >
              Add Member
            </Button>
            <AddOrganizationMember
              open={openAddOrgMember}
              onClose={() => setOpenAddOrgMember(false)}
              handleAddMemberData={handleAddMembeData}
            />
            <TextField
              variant="outlined"
              placeholder="Search"
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  height: "35px",
                },
              }}
            />
            <Button
              endIcon={<ArrowDropDownIcon />}
              onClick={handleClick}
              sx={{
                border: "0.8px solid black",
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: "5px",
                height: "35px",
                minWidth: "auto",
                px: 2,
              }}
            >
              Action
            </Button>
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
              <MenuItem onClick={handleOpenDeleteDialog}>Delete</MenuItem>
            </Menu>
            <ConfirmationDialog
              open={openConfirmDialog}
              onClose={handleCloseDeleteDialog}
              onConfirm={handleConfirmDelete}
              title="Warning!!"
              description="Do you want to delete all the selected members of the organization?"
            />
          </Box>
        </Box>
        <Box sx={{ height: 630, width: "98%", p: 0, mt: 1 }}>
          <DataGrid
            rows={members}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            initialPage={0}
            initialPageSize={10}
            onSelectionModelChange={(newSelection) => {
              setSelectedRows(newSelection);
            }}
          />
          {selectedMember && (
            <UpdateMemberForm
              open={openUpdateMemberModal}
              onClose={() => setOpenUpdateMemberModal(false)}
              initialValues={{
                name: selectedMember.name,
                email: selectedMember.email,
                accountType: selectedMember.accountType,
              }}
              onSubmit={(updatedValues) => {
                const updatedMembers = members.map((member) =>
                  member.id === selectedMember.id
                    ? { ...member, ...updatedValues }
                    : member
                );
                setMembers(updatedMembers);
                setOpenUpdateMemberModal(false);
                setSelectedMember(null);
              }}
            />
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Members;
