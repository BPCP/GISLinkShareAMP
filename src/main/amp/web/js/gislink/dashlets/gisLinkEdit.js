define(["dojo/_base/declare",
    "alfresco/core/Core",
    "alfresco/core/I18nUtils",
    "alfresco/dashlets/Dashlet"],
        function (declare, AlfCore, I18nUtils, Dashlet) {

            return declare([Dashlet], {
                title: "GIS Link Management",
                additionalCssClasses: "mediumpad",
                bodyHeight: 300,
                componentId: "component.gisLinkEdit",
                i18nScope: "gislinkdashlets.gisLinkEdit",
                i18nRequirements: [{i18nFile: "./i18n/gisLinkEdit.properties"}],
                widgetsForTitleBarActions: [
                    {
                        id: "HELLO_DASHLET_ACTIONS",
                        name: "alfresco/html/Label",
                        config: {
                            label: "Title-bar actions"
                        }
                    }
                ],
                widgetsForToolbar: [
                    {
                        id: "HELLO_DASHLET_TOOLBAR",
                        name: "alfresco/html/Label",
                        config: {
                            label: "Toolbar"
                        }
                    }
                ],
                widgetsForBody: [
                    {name: "alfresco/buttons/AlfButton",
                        config: {
                            pubSubScope: "mybutton",
                            publishTopic: "ATestTopic",
                            label: "Just A Button"
                        }
                    },
                    {
                        name: "alfresco/forms/DynamicForm",
                        id: "myDynamicForm",
                        config: {
                            name: "deleteForm",
                            pubSubScope: "Gis_Link_edit",
                            subscriptionTopic: "UPDATED_FORM_DETAILS",
                            okButtonPublishTopic: "GIS_LINK_DELETE",
                            widgets: [
                                {name: "alfresco/forms/controls/TextBox",
                                    config: {
                                        name: "pk",
                                        id: "pk",
                                        label: "Source GIS Link",
                                        fieldId: "sourcelink"}
                                }, {name: "alfresco/forms/controls/TextBox",
                                    config: {
                                        name: "npk",
                                        id: "npk",
                                        label: "Source GIS Link",
                                        fieldId: "targetlink"}
                                }
                            ]
                        }
                    }
                ]
            });
        }
);