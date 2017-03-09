angular.module('app.services').factory("urlAPI", [
    function() {
        'use strict';
        var admin = "/admin/";
        var appmonitor = "/appmonitor/monitor/";
        var push = "/push/push/";
        var update = "/update/appmanage/";

        return {
        	/*admin*/
        	admin_group_view: admin + "group/view",
        	admin_group_edit: admin + "group/edit",
            admin_group_create: admin + "group/create",
        	admin_group_update: admin + "group/update",
            admin_group_delete: admin + "group/delete",
            admin_group_disable: admin + "group/disable",
        	admin_group_channel: admin + "group/channel",
        	admin_role_view: admin + "role/view",
        	admin_role_edit: admin + "role/edit",
        	admin_role_create: admin + "role/create",
        	admin_role_update: admin + "role/update",
            admin_role_delete: admin + "role/delete",
            admin_role_disable: admin + "role/disable",
        	admin_user_view: admin + "user/view",
        	admin_user_edit: admin + "user/edit",
        	admin_user_create: admin + "user/create",
        	admin_user_update: admin + "user/update",
            admin_user_delete: admin + "user/delete",
            admin_user_disable: admin + "user/disable",
            admin_app_view: admin + "app/view",
            admin_app_edit: admin + "app/edit",
            admin_app_create: admin + "app/create",
            admin_app_update: admin + "app/update",
            admin_app_delete: admin + "app/delete",
            admin_app_disable: admin + "app/disable",

            /*push 接口*/
            pushAllApp: push + "allapp",
            push_delPush: push + "deletePush",
            pushGetDevice: push + "devices",
            pushGetSegment: push + "appSegmentList",
            pushGetConfig: push + "getconfig",
            push_setConfig: push + "config",
            pushConfirm: push + "confirm",
            pushActive: push + "active",
            pushSetInMsg: push + "setInMessage",
            pushSaveInMsg: push + "saveInMessage",
            pushSetSchedule: push + "setSchedule",
            pushSaveSchedule: push + "saveSchedule",
            pushSetReceiver: push + "setReceiver",
            pushUploadIds: push + "uploadIds",
            push_saveReceiver: push + "saveReceiver",
            push_msgList: push + "messageListPage",
            push_duplicate: push + "duplicate",
            pushDelInMsg: push + "deleteInMessage",
            push_delNtfMsg: push + "deleteNtfMessage",
            push_inactive: push + "inactive",
            push_setNtfMsg: push + "setNtfMessage",
            push_uploadImg: push + "uploadNtfImg",
            push_uploadVideo: push + "uploadNtfVideo",
            push_uploadPostImg: push + "uploadNtfPostImg",
            push_clearMedia: push + "clearNtfMediaMessage",
            push_saveNtfMsg: push + "saveNtfMessage",
            push_overview: push + "reportoverview",
            push_arrive: push + "reportarrive",
            push_click: push + "reportclick",
            push_display: push + "reportdisplay",
            push_arriveTable: push + "tablearrive",
            push_clickTable: push + "tableclick",
            push_displayTable: push + "tabledisplay",
            push_step: push + "stepStatus",
            push_segment: push + "segmentListPage",
            push_segmentDelete: push + "deleteSegment",
            push_segmentDetail: push + "segmentDetail",
            push_segmentNew: push + "saveSegment",
            push_segmentUpdate: push + "updateSegment",
            push_segmentCondition: push + "segmentCondition",
            push_weeklyReport: push + "weeklyReport",
            push_weeklyHistory: push + "weeklyHistoryListPage",
            push_launcherList: push + "launcherPushList",
            push_launcherDelete: push + "deleteLauncherPush",
            push_launcherDuplicate: push + "duplicateLauncherPush",
            push_launcherActive: push + "launcherActivate",
            push_launcherDetail: push + "setLauncherPush",
            push_launcherEdit: push + "saveLauncherPush",
            push_launcherDevices: push + "launcherDevices",
            push_launcherTokens: push + "uploadTokens",
            /*update接口*/
            update_data: update + "data",
            update_permission: update + "permission",
            update_checklist: update + "checklist",
            update_addapp: update + "addapp",
            update_uploadfile: update + "uploadfile",
            update_appdetail: update + "appdetail",
            update_getDevice: update + "device",
            update_getOSVersion: update + "osversion",
            update_androidVersion: update + "version",
            update_getArea: update + "country",
            update_applist: update + "applist",
            update_appverlist: update + "appverlist",
            update_saveVersion: update + "addappver",
            update_getImg: update + "getlastimg",
            update_editappver: update + "editappver",
            update_delincrepack: update + "delincrepack",
            update_checkVersion: update + "checkappstatus",
            update_extlist: update + "extlist",
            update_createext: update + "createext",
            update_getextend: update + "getextend",
            update_editextend: update + "editextend",
            update_delextend: update + "delextend",
            update_campDevlist: update + "getcompaign",
            update_campDevstatus: update + "changestatus",
            update_campDevdetail: update + "compaigndetail",
            update_campDevbywhere: update + "getcompaignbywhere",
            update_campDevadd: update + "addcompaign",
            update_campDevupdate: update + "updatecompaign",
            update_hotfixdetail: "/update/hotfix/detail",
            update_hotfixVer: "/update/hotfix/vlist",
            update_saveHotfix: "/update/hotfix/neocreate",
            update_editHotfix: "/update/hotfix/neoupdate",
            update_checkHotfix: "/update/hotfix/change",
            update_patchList: "/update/task/tasklist",

            /*campaign接口*/
            campaign_versionList: "/campaign/util/2003",
            campaign_appList: "/campaign/util/2002",
            campaign_detailList: "/campaign/util/2005",
            campaign_manage_list: "/campaign/place/5006",
            campaign_manage_detail: "/campaign/place/5002",
            campaign_manage_state: "/campaign/place/5003",
            campaign_manage_save: "/campaign/place/5005",
            campaign_manage_add: "/campaign/place/5004",
            campaign_manage_delete: "/campaign/place/5007",
            campaign_place_type: "/campaign/util/2012",
            campaign_place_list: "/campaign/place/5001",
            campaign_placement_list: "/campaign/advScheduler/40001",
            campaign_placement_detail: "/campaign/operate/7002",
            campaign_placement_state: "/campaign/advScheduler/40004",
            campaign_placement_priority: "/campaign/advScheduler/40002",
            campaign_show_list: "/campaign/type/4001",
            campaign_show_detail: "/campaign/type/4002",
            campaign_show_state: "/campaign/type/4003",
            campaign_show_new: "/campaign/type/4004",
            campaign_show_edit: "/campaign/type/4005",
            campaign_show_fields: "/campaign/util/2016",
            campaign_show_delete: "/campaign/type/4006",
            campaign_group_list: "/campaign/group/6001",
            campaign_group_detail: "/campaign/group/6002",
            campaign_group_state: "/campaign/group/6003",
            campaign_group_new: "/campaign/group/6004",
            campaign_group_edit: "/campaign/group/6005",
            campaign_group_delete: "/campaign/group/6007",
            campaign_group_place: "/campaign/util/2006",
            campaign_app_list: "/campaign/app/3001",
            campaign_app_detail: "/campaign/app/3002",
            campaign_app_state: "/campaign/app/3003",
            campaign_app_new: "/campaign/app/3004",
            campaign_app_edit: "/campaign/app/3005",
            campaign_app_delete: "/campaign/app/3006",
            campaign_app_category: "/campaign/util/2001",
            campaign_creative_list: "/campaign/creative/11001",
            campaign_creative_detail: "/campaign/creative/11002",
            campaign_creative_state: "/campaign/creative/11004",
            campaign_creative_edit: "/campaign/creative/11003",
            campaign_creative_delete: "/campaign/creative/11005",
            campaign_creative_camp: "/campaign/operate/7001",
            campaign_creative_place: "/campaign/operate/5006",
            campaign_dashboard_data: "/campaign/dashboard/12001",
            campaign_dashboard_line: "/campaign/dashboard/12002",
            campaign_dashboard_bar: "/campaign/dashboard/12003",
            campaign_dashboard_camp: "/campaign/dashboard/12004",
            campaign_dashboard_list: "/campaign/dashboard/12005",
            campaign_dashboard_brand: "/campaign/dashboard/12006",
            campaign_dashboard_pie: "/campaign/dashboard/12007",
            campaign_dashboard_unique: "/campaign/dashboard/12008",
            campaign_appInfo_list: "/campaign/appInfo/10001",
            campaign_appInfo_detail: "/campaign/appInfo/10002",
            campaign_appInfo_delete: "/campaign/appInfo/10005",
            campaign_appInfo_category: "/campaign/operate/7006",
            campaign_offer_list: "/campaign/offer/20001",
            campaign_offerOn_list: "/campaign/offer/20006",
            campaign_offer_detail: "/campaign/offer/20002",
            campaign_offer_edit: "/campaign/operate/7013",
            campaign_offer_delete: "/campaign/offer/20005",
            campaign_offer_cpx: "/campaign/offer/20004",
            campaign_offer_adver: "/campaign/owner/30006",
            campaign_offer_country: "/campaign/util/2011",
            campaign_offer_group: "/campaign/util/2008",
            campaign_offer_place: "/campaign/util/2009",
            campaign_operate_list: "/campaign/operate/7007",
            campaign_operate_allAslist: "/campaign/operate/7017",
            campaign_operate_singleAslist: "/campaign/operate/7018",
            campaign_operate_netlist: "/campaign/operate/7019",
            campaign_operate_detail: "/campaign/operate/7002",
            campaign_operate_state: "/campaign/operate/7003",
            campaign_operate_new: "/campaign/operate/7004",
            campaign_operate_edit: "/campaign/operate/7005",
            campaign_network_new: "/campaign/operate/7014",
            campaign_network_edit: "/campaign/operate/7015",
            campaign_operate_delete: "/campaign/operate/7016",
            campaign_operate_img: "/campaign/util/2010",
            campaign_operate_area: "/campaign/util/2011",
            campaign_operate_device: "/campaign/operate/7009",
            campaign_operate_os: "/campaign/operate/7010",
            campaign_operate_language: "/campaign/operate/7011",
            campaign_operate_adver: "/campaign/owner/30006",
            campaign_operate_offer: "/campaign/offer/20003",
            campaign_owner_list: "/campaign/owner/30001",
            campaign_owner_detail: "/campaign/owner/30002",
            campaign_owner_state: "/campaign/owner/30005",
            campaign_owner_new: "/campaign/owner/30004",
            campaign_owner_edit: "/campaign/owner/30003",
            campaign_owner_delete: "/campaign/owner/30007",
            campaign_report_chart: "/campaign/report/8006",
            campaign_report_list: "/campaign/report/8007",
            campaign_report_app: "/campaign/util/2013",
            campaign_report_camp: "/campaign/util/2014",
            campaign_report_channel1: "/campaign/util/2015",
            campaign_report_channel2: "/campaign/util/2017",
            /*X-screen*/
            xscreen_list: "/xscreen/card/list",
            xscreen_detail: "/xscreen/card/detail",
            xscreen_edit: "/xscreen/card/editcard",
            xscreen_channel: "/xscreen/life/getchannellist",
            xscreen_searchList: "/xscreen/search/index",
            xscreen_searchDetail: "/xscreen/search/detail",
            xscreen_searchEngin: "/xscreen/search/list",
            xscreen_searchChange: "/xscreen/search/change",
            xscreen_channelList: "/xscreen/num/list",
            xscreen_channelDetail: "/xscreen/num/getnuminfo",
            xscreen_channelCreate: "/xscreen/num/create",
            xscreen_channelChange: "/xscreen/num/update",
            xscreen_placeList: "/xscreen/pal/list",
            xscreen_placeDetail: "/xscreen/pal/getplacementinfo",
            xscreen_placeCreate: "/xscreen/pal/create",
            xscreen_placeDelete: "/xscreen/pal/delete",
            xscreen_lifeList: "/xscreen/life/list",
            xscreen_lifeDetail: "/xscreen/life/getlifeinfo",
            xscreen_lifeAdd: "/xscreen/life/create",
            xscreen_lifeDelete: "/xscreen/life/delete",
            xscreen_upload: "/xscreen/api/uploadfile",
            xscreen_directList: "/xscreen/nav/list",
            xscreen_directDetail: "/xscreen/nav/getnavinfo",
            xscreen_directAdd: "/xscreen/nav/create",
            xscreen_directDelete: "/xscreen/nav/delete",
            xscreen_categoryList: "/xscreen/card/cardcate",
            xscreen_categoryEdit: "/xscreen/card/changename",

            /*CMS*/
            cms_packageList: "/update/task/index",
            cms_packageDetail: "/update/task/detail",
            cms_packageNew: "/update/task/create",
            cms_packageEdit: "/update/task/update",
            cms_packageApp: "/update/task/appinfo",
            cms_packageVendor: "/update/task/vendor",
        }
    }
])
