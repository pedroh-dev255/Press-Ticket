import { Checkbox, FormControlLabel, Grid, Paper, Select, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(0, 1),
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },
    settingOption: {
        marginLeft: "auto",
    },
    gridContainer: {
        padding: theme.spacing(2),
    },
}));

const ComponentSettings = ({ settings, getSettingValue, handleChangeBooleanSetting, handleChangeSetting }) => {
    const classes = useStyles();
    const { t } = useTranslation();

    const booleanSettings = [
        { key: "userCreation", label: t("settings.general.userCreation.name"), note: t("settings.general.userCreation.note") },
        { key: "allTicket", label: t("settings.general.allTicket.name"), note: t("settings.general.allTicket.note") },
        { key: "CheckMsgIsGroup", label: t("settings.general.CheckMsgIsGroup.name"), note: t("settings.general.CheckMsgIsGroup.note") },
        { key: "call", label: t("settings.general.call.name"), note: t("settings.general.call.note") },
        { key: "sideMenu", label: t("settings.general.sideMenu.name"), note: t("settings.general.sideMenu.note") },
        { key: "quickAnswer", label: t("settings.general.quickAnswer.name"), note: t("settings.general.quickAnswer.note") },
        { key: "closeTicketApi", label: t("settings.general.closeTicketApi.name"), note: t("settings.general.closeTicketApi.note") },
        { key: "ASC", label: t("settings.general.ASC.name"), note: t("settings.general.ASC.note") },
        { key: "created", label: t("settings.general.created.name"), note: t("settings.general.created.note") },
        { key: "openTickets", label: t("settings.general.openTickets.name"), note: t("settings.general.openTickets.note") },
        { key: "signOption", label: t("settings.general.signOption.name"), note: t("settings.general.signOption.note") },
        { key: "tabsPending", label: t("settings.general.tabsPending.name"), note: t("settings.general.tabsPending.note") },
        { key: "tabsClosed", label: t("settings.general.tabsClosed.name"), note: t("settings.general.tabsClosed.note") },
        { key: "listItemSpy", label: t("settings.general.listItemSpy.name"), note: t("settings.general.listItemSpy.note") },
        { key: "queueLength", label: t("settings.general.queueLength.name"), note: t("settings.general.queueLength.note") },
    ];

    const settingsChunks = [];
    for (let i = 0; i < booleanSettings.length; i += 8) {
        settingsChunks.push(booleanSettings.slice(i, i + 8));
    }

    return (
        <Grid container spacing={3} className={classes.gridContainer}>
            {settingsChunks.map((chunk, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    {chunk.map(setting => (
                        <Paper className={classes.paper} key={setting.key}>
                            <Tooltip title={setting.note}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={settings && settings.length > 0 && getSettingValue(setting.key) === "enabled"}
                                            onChange={handleChangeBooleanSetting}
                                            name={setting.key}
                                            color="primary"
                                        />
                                    }
                                    label={setting.label}
                                />
                            </Tooltip>
                        </Paper>
                    ))}
                </Grid>
            ))}
            <Grid item xs={12} sm={6} md={4}>
                <Tooltip title={t("settings.general.timeCreateNewTicket.note")}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="body1">
                            {t("settings.general.timeCreateNewTicket.name")}
                        </Typography>
                        <Select
                            margin="dense"
                            variant="outlined"
                            native
                            id="timeCreateNewTicket-setting"
                            name="timeCreateNewTicket"
                            value={settings && settings.length > 0 && getSettingValue("timeCreateNewTicket")}
                            className={classes.settingOption}
                            onChange={handleChangeSetting}
                        >
                            <option value="10">{t("settings.general.timeCreateNewTicket.options.10")}</option>
                            <option value="30">{t("settings.general.timeCreateNewTicket.options.30")}</option>
                            <option value="60">{t("settings.general.timeCreateNewTicket.options.60")}</option>
                            <option value="300">{t("settings.general.timeCreateNewTicket.options.300")}</option>
                            <option value="1800">{t("settings.general.timeCreateNewTicket.options.1800")}</option>
                            <option value="3600">{t("settings.general.timeCreateNewTicket.options.3600")}</option>
                            <option value="7200">{t("settings.general.timeCreateNewTicket.options.7200")}</option>
                            <option value="21600">{t("settings.general.timeCreateNewTicket.options.21600")}</option>
                            <option value="43200">{t("settings.general.timeCreateNewTicket.options.43200")}</option>
                            <option value="86400">{t("settings.general.timeCreateNewTicket.options.86400")}</option>
                            <option value="604800">{t("settings.general.timeCreateNewTicket.options.604800")}</option>
                            <option value="1296000">{t("settings.general.timeCreateNewTicket.options.1296000")}</option>
                            <option value="2592000">{t("settings.general.timeCreateNewTicket.options.2592000")}</option>
                        </Select>
                    </Paper>
                </Tooltip>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Tooltip title={t("settings.general.dispMessagesPerDay.note")}>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography variant="body1">
                            {t("settings.general.dispMessagesPerDay.name")}
                        </Typography>
                        <Select
                            margin="dense"
                            variant="outlined"
                            native
                            id="dispMessagesPerDay-setting"
                            name="dispMessagesPerDay"
                            value={settings && settings.length > 0 && getSettingValue("dispMessagesPerDay")}
                            className={classes.settingOption}
                            onChange={handleChangeSetting}
                        >
                            <option value="10">{t("settings.general.dispMessagesPerDay.options.10")}</option>
                            <option value="25">{t("settings.general.dispMessagesPerDay.options.25")}</option>
                            <option value="30">{t("settings.general.dispMessagesPerDay.options.30")}</option>
                            <option value="50">{t("settings.general.dispMessagesPerDay.options.50")}</option>
                            <option value="100">{t("settings.general.dispMessagesPerDay.options.100")}</option>
                            <option value="150">{t("settings.general.dispMessagesPerDay.options.150")}</option>
                            <option value="200">{t("settings.general.dispMessagesPerDay.options.200")}</option>
                            <option value="250">{t("settings.general.dispMessagesPerDay.options.250")}</option>
                            <option value="300">{t("settings.general.dispMessagesPerDay.options.300")}</option>
                            <option value="350">{t("settings.general.dispMessagesPerDay.options.350")}</option>
                            <option value="400">{t("settings.general.dispMessagesPerDay.options.400")}</option>
                            <option value="450">{t("settings.general.dispMessagesPerDay.options.450")}</option>
                            <option value="500">{t("settings.general.dispMessagesPerDay.options.500")}</option>
                            <option value="1000">{t("settings.general.dispMessagesPerDay.options.1000")}</option>
                        </Select>
                    </Paper>
                </Tooltip>
            </Grid>
        </Grid>
    );
};

export default ComponentSettings;
