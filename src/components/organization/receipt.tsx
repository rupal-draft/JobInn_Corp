import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";

const Receipt: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Download Button */}
      <Box sx={{ textAlign: "right", mb: 3 }}>
        <Button
          variant="contained"
          sx={{
            width: "200px",
            height: "40px",
            color: "#fff",
            borderRadius: "15px",
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          Download Receipt
        </Button>
      </Box>

      {/* Receipt Heading and Code */}
      <Box>
        <Typography
          variant="h1"
          sx={{ mb: 2, fontWeight: "bold", color: "#000", fontSize: "2.5rem" }}
        >
          Receipts
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, px: 2 }}>
          #27347633-O22
        </Typography>

        {/* Invoice and Billing Dates */}
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="body1"
            sx={{ display: "inline-block", mr: 2, color: "secondary.main" }}
          >
            Invoice Date
          </Typography>
          <Typography variant="body1" sx={{ display: "inline-block" }}>
            6th March 2024
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="body1"
            sx={{ display: "inline-block", mr: 6.5, color: "secondary.main" }}
          >
            Paid On
          </Typography>
          <Typography variant="body1" sx={{ display: "inline-block" }}>
            7th March 2024
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ p: 4 }} />
      <Box sx={{ display: "flex", gap: 30, mt: 6 }}>
        {/* Billed To */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: "#000" }}>
            Billed To
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Microsoft Inc.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            BILLGATES@Micro.com
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            123 Rue Stanfield, Montreal
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            (+254) 752-233-462
          </Typography>
        </Box>

        {/* From */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: "#000" }}>
            From
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Jobinn Technologies Inc.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Jobinn.io
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            3537 Catrier, Montreal
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            (+254) 752-233-462
          </Typography>
        </Box>
      </Box>
      <Box sx={{ py: 6 }}>
        <Typography variant="body1">
          This is an invoice sample.This message is set as default.You can
          always change it to whatever you like.Feel free
        </Typography>
      </Box>
      <Box>
        {/* Headers */}
        <Box sx={{ display: "flex", gap: 24 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", flexBasis: "50%" }} // More space for Description
          >
            Description
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", flexBasis: "15%", textAlign: "center" }}
          >
            Workers
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", flexBasis: "15%", textAlign: "center" }}
          >
            Price
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", flexBasis: "15%", textAlign: "center" }}
          >
            Amount
          </Typography>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Row 1 */}
        <Box sx={{ display: "flex", gap: 24 }}>
          <Typography variant="body1" sx={{ flexBasis: "50%" }}>
            Jobinn: Help moving out
          </Typography>
          <Typography
            variant="body1"
            sx={{ flexBasis: "15%", textAlign: "center" }}
          >
            5
          </Typography>
          <Typography
            variant="body1"
            sx={{ flexBasis: "15%", textAlign: "center" }}
          >
            $100
          </Typography>
          <Typography
            variant="body1"
            sx={{ flexBasis: "15%", textAlign: "center" }}
          >
            $500
          </Typography>
        </Box>

        {/* Row 2 */}
        <Box sx={{ display: "flex", gap: 24, mt: 2 }}>
          <Typography variant="body2" sx={{ flexBasis: "50%" }}>
            6 pager static Website Design
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 4 }}>
        <Box sx={{ width: "300px" }}>
          {" "}
          {/* Adjust width as needed */}
          {/* Subtotal */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body1">Subtotal</Typography>
            <Typography variant="body1">$600</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          {/* Excluding Tax */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body1">Excluding Tax</Typography>
            <Typography variant="body1">$95000</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          {/* Discount */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body1">Discount (2%)</Typography>
            <Typography variant="body1">$1900</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          {/* Total */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body1">Total</Typography>
            <Typography variant="body1">$93100</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          {/* Amount Due */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "semibold" }}>
              Amount Due
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "semibold" }}>
              $93100
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
        </Box>
      </Box>
      <Box sx={{ py: 6 }}>
        <Typography variant="body1">
          This is a footer sample. You can add a special message to your user to
          thank them.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">
          #27347633-O22 . $93100 due 7 March, 2023
        </Typography>
        <Typography variant="body2">Page 1 0f 1 </Typography>
      </Box>
    </Box>
  );
};

export default Receipt;
