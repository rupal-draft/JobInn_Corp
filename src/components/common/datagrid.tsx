import React from "react";
import {
  DataGrid as CustomDataGrid,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";
import { SxProps, Theme } from "@mui/material";

interface CustomDataGridProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSizeOptions?: number[];
  initialPage?: number;
  initialPageSize?: number;
  sx?: SxProps<Theme>;
  onSelectionModelChange?: (newSelection: number[]) => void;
}

const DataGrid: React.FC<CustomDataGridProps> = ({
  rows,
  columns,
  pageSizeOptions = [5, 10],
  initialPage = 0,
  initialPageSize = 10,
  sx,
  onSelectionModelChange,
}) => {
  return (
    <CustomDataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: initialPage, pageSize: initialPageSize },
        },
      }}
      pageSizeOptions={pageSizeOptions}
      checkboxSelection
      onRowSelectionModelChange={onSelectionModelChange}
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#f5f5f5",
          fontWeight: "bold",
        },
        "& .MuiDataGrid-cell": {
          color: "#000",
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#f0f0f0",
        },
        p: 0,
        ...sx,
      }}
    />
  );
};

export default DataGrid;
