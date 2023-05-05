import { Box, CssBaseline, FormControlLabel, Paper, Stack,  TextField, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import Divider from "@mui/material/Divider";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { DataGrid, Column, MasterDetail } from 'devextreme-react/data-grid';
import '../../dx-styles.css';
import Data from "./Data";
import DetailTemplate from "./DetailTemplate";
import PartyAddressEdit from "./PartyAddressEdit";
import PartyCommunication from "./PartyCommunication";
import PartySalesMap from "./PartySalesMap";
import RebateParty from "./RebateParty";


export default function PartyMaster() {

  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [baseObj, setBaseObj] = useState({});

  useEffect(() => {
    const url = "http://localhost:3004/party/1";
    axios({
      meth2od: "get",
      url: url
    })
      .then(res => {
        console.log(res.data);
        setBaseObj(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);


  const url = "http://localhost:3004/party/1"

  const onValChange = (e) => {
    // console.log(e);
    if (e.target.type === 'checkbox')

      setBaseObj({ ...baseObj, [e.target.name]: e.target.checked ? "Y" : "N" });

    else
      setBaseObj({ ...baseObj, [e.target.name]: e.target.value });

    // console.log(e.target);
  }

  function handleSubmit() {
    axios({
      method: "put",
      url: url,
      data: baseObj
    })
      .then(res => {
        console.log(res.data);
        // optionally update the state or show a success message
      })
      .catch(err => {
        console.error(err);
        // show an error message if something went wrong
      })
  }

  return (

    <>
      {
        Object.keys(baseObj).length > 0 ?
          <CssBaseline>
            <Box marginTop={10} >
              <Paper elevation={3} sx={{ paddingTop: 1, paddingLeft: 3, paddingBottom: 3, paddingRight: 3, fontFamily: 'Poppins' }}>
                <h1 style={{ paddingBottom: 0, marginBottom: 0 }}>Party</h1>
                <span>Manage details of parties and associated types</span>
                <Grid container spacing={2} sx={{ paddingTop: 2 }}>
                  <Grid item xs={12}>
                    <div className="btn-secondary">
                      <Grid container spacing={2} sx={{}} >
                        <Grid item padding={1}>
                          <TextField sx={{ paddingRight: 3, paddingBottom: 2 }}
                            variant="standard"
                            label="Party Code"
                            onChange={(evt) => onValChange(evt)}
                            required
                            name="PartyCode"
                            value={baseObj.PartyCode}
                            autoComplete="off"
                            inputProps={{ maxLength: 25 }}
                          />

                          <TextField sx={{ paddingRight: 3 }}
                            variant="standard"
                            label="PartyName"
                            onChange={(evt) => onValChange(evt)}
                            required
                            name="PartyName"
                            value={baseObj.PartyName}
                            autoComplete="off"
                            inputProps={{ maxLength: 25 }}
                          />

                          <TextField sx={{ paddingRight: 3 }}
                            variant="standard"
                            label="Pan"
                            onChange={(evt) => onValChange(evt)}
                            required
                            name="Pan"
                            value={baseObj.Pan}
                            autoComplete="off"
                            inputProps={{ maxLength: 25 }}
                          />

                          <TextField sx={{ paddingRight: 3 }}
                            variant="standard"
                            label="Tan"
                            onChange={(evt) => onValChange(evt)}
                            required
                            name="Tan"
                            value={baseObj.Tan}
                            autoComplete="off"
                            inputProps={{ maxLength: 25 }}
                          />

                          <TextField sx={{ paddingRight: 3 }}
                            variant="standard"
                            label="EFZ Certificate Number"
                            onChange={(evt) => onValChange(evt)}
                            required
                            name="EfzCertificateNumber"
                            value={baseObj.EfzCertificateNumber}
                            autoComplete="off"
                            inputProps={{ maxLength: 25 }}
                          />

                          <TextField sx={{ paddingRight: 3 }}
                            variant="standard"
                            label="TDS Exemption Number"
                            onChange={(evt) => onValChange(evt)}
                            required
                            name="TdsExceptionNumber"
                            value={baseObj.TdsExceptionNumber}
                            autoComplete="off"
                            inputProps={{ maxLength: 25 }}
                          />

                          <TextField sx={{ paddingRight: 3 }}
                            variant="standard"
                            label="TDS Percentage"
                            onChange={(evt) => onValChange(evt)}
                            required
                            name="TdsPercentage"
                            value={baseObj.TdsPercentage}
                            autoComplete="off"
                            inputProps={{ maxLength: 25 }}
                          />

                          <TextField sx={{ paddingRight: 3 }}
                            variant="standard"
                            label="Credit Number Of Days"
                            onChange={(evt) => onValChange(evt)}
                            required
                            name="CreditNumberOfDays"
                            value={baseObj.CreditNumberOfDays}
                            autoComplete="off"
                            inputProps={{ maxLength: 25 }}
                          />

                          <TextField sx={{ paddingRight: 3 }}
                            variant="standard" label="Credit Amount" onChange={(evt) => onValChange(evt)} required
                            name="CreditAmount" value={baseObj.CreditAmount}
                            autoComplete="off"
                            inputProps={{ maxLength: 25 }} />




                          <TextField
                            onChange={(evt) => onValChange(evt)} required value={baseObj.Remarks}
                            name="Remarks" autoComplete="off"
                            label="Remarks"
                            variant="standard"

                          />
                          <FormControl>
                            <FormControlLabel
                              control={<Checkbox checked={baseObj.Active == "Y"} />}
                              value={baseObj.active}
                              onChange={(evt) => onValChange(evt)}
                              name="Active"
                              label="Active"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  {/* 
                <Divider orientation="vertical" flexItem sx={{ marginTop: 2, marginRight: 2, borderRightWidth: 1, borderColor: 'black' }} /> */}
                  <Grid item xs={12} >

                    <TabContext value={value}>
                      <TabList sx={{ bgcolor: "whitesmoke" }}
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                      >
                        <Tab value="one" label="Party & Types" />
                        <Tab value="two" label="Address & Contacts" />
                        <Tab value="three" label="Communication" />
                        <Tab value="four" label="Rebate Party" />
                        <Tab value="five" label="Party Sales Map" />
                      </TabList>

                      <TabPanel value="one">
                        <Grid container spacing={2} >
                          <Grid item xs={6}>
                            <p style={{ fontWeight: "bold", margin: 0 }} >Types Of Party</p>
                            <Grid container spacing={4}>
                              <Grid item  >
                                <Stack spacing={0}>
                                  <FormControl sx={{ p: 0 }} >
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsCustomer == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsCustomer"
                                      label="Customer"
                                    />
                                  </FormControl>
                                  <FormControl sx={{ p: 0 }} >
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsCha == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name='IsCha'
                                      label="CHA"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsConsignee == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsConsignee"
                                      label="Consignee" />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsForwarder == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsForwarder"
                                      label="Forwarder"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsBillingParty == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsBillingParty"
                                      label="Billing Party"
                                    />
                                  </FormControl>
                                </Stack>
                              </Grid>

                              <Grid item >
                                <Stack>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsLine == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsLine"
                                      label="Line"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsOsa == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsOsa"
                                      label="OSA"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsServiceProvider == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsServiceProvider"
                                      label="Service Provider"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsShipper == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsShipper"
                                      label="Shipper"
                                    />
                                  </FormControl>
                                </Stack>
                              </Grid>
                              <Grid item >
                                <Stack spacing={0}>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsServiceProvider == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsServiceProvider"
                                      label="Service Provider"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsShipper == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsShipper"
                                      label="Shipper"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsRebateParty == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsRebateParty"
                                      label="Rebate Party"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.IsNotifyParty == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="IsNotifyParty"
                                      label="Notify Party"
                                    />
                                  </FormControl>
                                </Stack>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={5} sx={{ borderLeft:"1px solid darkgray" }}>
                            <p style={{ fontWeight: "bold", margin: 0 }} >Other Infomation </p>
                            <Grid container>
                              <Grid item>
                                <Stack spacing={0}>
                                  <FormControl variant="standard">
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.TdsExemptedFlag == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="TdsExemptedFlag"
                                      label="TDS Exempted"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.EconomicFreeZoneFlag == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="EconomicFreeZoneFlag"
                                      label="Economic Free Zone"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.PdcAcceptableFlag == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="PdcAcceptableFlag"
                                      label="PDC Acceptable"
                                    />
                                  </FormControl>
                                </Stack>
                              </Grid>
                              <Grid item>
                                <Stack>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.RebateFlag == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="RebateFlag"
                                      label="Rebate"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.SpecialEconomicZoneFlag == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="SpecialEconomicZoneFlag"
                                      label="Special Economic Zone"
                                    />
                                  </FormControl>
                                  <FormControl>
                                    <FormControlLabel
                                      control={<Checkbox checked={baseObj.LetterUndertakingFlag == "Y"} />}
                                      onChange={(evt) => onValChange(evt)}
                                      name="LetterUndertakingFlag"
                                      label="Letter Undertaking"
                                    />
                                  </FormControl>
                                </Stack>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </TabPanel>
                      <TabPanel value="two">
                        <PartyAddressEdit />
                      </TabPanel>
                      <TabPanel value="three">
                        <PartyCommunication />
                      </TabPanel>

                      <TabPanel value="four">
                        <RebateParty />
                      </TabPanel>

                      <TabPanel value="five">
                        <PartySalesMap />
                      </TabPanel>
                    </TabContext>
                  </Grid>
                </Grid>
                {/* -------------button-------- */}
                <Stack spacing={2} marginTop="15px" direction="row">
                  <Button variant="primary" onClick={handleSubmit} size="sm"><i className="bi bi-check-square" style={{ paddingRight: 6 }}></i>Confirm</Button>
                  <Button variant="primary" size="sm"><i className="bi bi-x-square" style={{ paddingRight: 6 }}></i>Cancel</Button>
                </Stack>
              </Paper>
            </Box >
          </CssBaseline>
          :
          <></>
      }
    </>

  )
}
