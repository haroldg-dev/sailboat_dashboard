import { useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const DataTable = ({ data, columns, onEdit, onDelete, ...restProps }) => {
  const [modalConfirmation, setModalConfirmation] = useState(null);

  return (
    <>
      <DataGrid
        {...restProps}
        components={{ Toolbar: GridToolbar, ...restProps.components }}
        rows={data}
        columns={[
          ...columns,
          {
            field: "action",
            headerName: "Acciones",
            renderCell: ({ row }) => {
              return (
                <Box>
                  <IconButton color="secondary" onClick={() => onEdit(row)}>
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      setModalConfirmation(
                        <Dialog open>
                          <DialogTitle variant="h4">
                            ¿Quieres eliminar esta información?
                          </DialogTitle>
                          <DialogContent></DialogContent>
                          <DialogActions>
                            <Button onClick={() => setModalConfirmation(null)}>
                              Cancelar
                            </Button>
                            <Button
                              onClick={() => {
                                onDelete(row);
                              }}
                              color="secondary"
                              variant="contained"
                            >
                              Eliminar
                            </Button>
                          </DialogActions>
                        </Dialog>
                      );
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              );
            },
          },
        ]}
      />
      {modalConfirmation}
    </>
  );
};

export default DataTable;
