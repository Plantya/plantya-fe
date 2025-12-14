import React, { useState, useEffect, useMemo, useCallback } from "react"; // Tambah useMemo
import { Container, Box, Typography, Grid, Paper, Card, CardHeader, CardContent, TextField, IconButton } from "@mui/material";
import { Button } from "@mui/material";
import RootPageCustom from "../../components/common/RootPageCustom";
import TableCustom from "../../components/common/TableCustom";
import { getUser } from "../../utils/ListApi";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MasterUser = () => {

    const [app002Msg, setApp002setMsg] = useState("");
    const [app002MsgStatus, setApp002setMsgStatus] = useState("");
    const [firstRender, setFirstRender] = useState(false)
    const [app002p01Page, setApp002p01Page] = useState(true);
    const [app002p01UserData, setApp002p01UserData] = useState([]);
    const [app002p01UserTotalData, setApp002p01UserTotalData] = useState(0)
    const [loading, setLoading] = useState(false);

    // Header Column
    const app002UserColumns = [
        { dataField: "user_id", text: "User ID", sort: true, align: "center", headerStyle: { textAlign: 'center' } },
        { dataField: "name", text: "Username", sort: true, headerStyle: { textAlign: 'center' } },
        { dataField: "role", text: "Role", sort: true, align: "center", headerStyle: { textAlign: 'center' } },
        { dataField: "email", text: "Email", sort: true, headerStyle: { textAlign: 'center' } },
        {
            dataField: "action", text: "Action", headerStyle: { textAlign: 'center', width: '120px' },
            formatter: (cellContent, row) => (
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <IconButton aria-label="edit" size="small" onClick={() => console.log('Edit user:', row)} color="info"><EditIcon fontSize="inherit" /></IconButton>
                    <IconButton aria-label="delete" size="small" onClick={() => console.log('Delete user:', row)} color="error"><DeleteIcon fontSize="inherit" /></IconButton>
                </Box>
            ),
        },
    ];

    const [app002p01UserDataParam, setApp002p01UserDataParam] = useState(
        {
            page: 1,
            size: 10,
            sort: "user_id",
            order: "asc",
            search: "",
            role: "ADMIN",
        }
    )


    // Call API
    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getUser(app002p01UserDataParam);
            console.log(response);

            debugger
            setApp002p01UserData(response?.data?.data ? response.data.data : []);
            setApp002p01UserTotalData(response?.data?.count_data ? response.data.count_data : 0);
        } catch (error) {
            console.error("Gagal mengambil data:", error);
            setApp002p01UserData([]);
            setApp002p01UserTotalData(0);
        } finally {
            setLoading(false);
        }
    }, []);


    // --- Handler untuk mengubah state akan tetap sama ---
    const handleChangePage = (event, newPage) => {
        setApp002p01UserDataParam(prevParams => ({ ...prevParams, page: newPage + 1 }));
    };

    const handleChangeRowsPerPage = (event) => {
        const newLimit = parseInt(event.target.value, 10);
        setApp002p01UserDataParam(prevParams => ({ ...prevParams, limit: newLimit, page: 1 }));
    };

    const handleRequestSort = (event, property) => {
        const isAsc = app002p01UserDataParam.sort === property && app002p01UserDataParam.order === 'asc';
        setApp002p01UserDataParam(prevParams => ({
            ...prevParams,
            sort: property,
            order: isAsc ? 'desc' : 'asc',
            page: 1
        }));
    };



    // --- PERUBAHAN 3: KIRIM DATA YANG SUDAH DIPROSES KE TABEL ---
    return (
        <React.Fragment>
            <RootPageCustom
                msgStateGet={app002Msg}
                msgStateSet={setApp002setMsg}
                msgStateGetStatus={app002MsgStatus}
                setFirstRender={setFirstRender}
            >
                <Container disableGutters maxWidth={false} sx={{ display: app002p01Page ? "block" : "none" }}>
                    <Card sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
                        <CardHeader sx={{ backgroundColor: 'background.paper', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} title="Master User" />
                        <CardContent sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
                            <Grid container justifyContent="start" alignItems="center" sx={{ mb: 2 }}>
                                <Grid justifyContent="start" alignItems="center" sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                                    <TextField placeholder="Search" sx={{ width: '200px' }} />
                                    <TextField placeholder="Role" sx={{ width: '200px' }} />
                                    <Button variant="contained" color="primary"><i className="bx bx-plus font-size-16 align-end me-2"></i>Export</Button>
                                    <Button variant="contained" color="primary"><i className="bx bx-plus font-size-16 align-end me-2"></i>Tambah User</Button>
                                </Grid>
                            </Grid>

                            <TableCustom
                                keyField="user_id"
                                columns={app002UserColumns}
                                appdata={app002p01UserData}
                                appdataTotal={app002p01UserTotalData}
                                loading={loading}
                                page={app002p01UserDataParam.page - 1}
                                rowsPerPage={app002p01UserDataParam.limit}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                sortField={app002p01UserDataParam.sort}
                                sortOrder={app002p01UserDataParam.order}
                                onRequestSort={handleRequestSort}
                            />
                        </CardContent>
                    </Card>
                </Container>
            </RootPageCustom>
        </React.Fragment >
    );
}

export default MasterUser;