define(["dojo/_base/declare",
    "alfresco/core/Core",
    "dojo/_base/lang",
    "alfresco/core/CoreXhr",
    "service/constants/Default"],
        function (declare, Core, lang, CoreXhr, AlfConstants) {

            return declare([Core, CoreXhr], {
                constructor: function gislinkedit_GISEditService__constructor(args) {
                    lang.mixin(this, args);
                    this.alfSubscribe("GIS_LINK_DELETE", lang.hitch(this, this.deleteLink));
                },
                deleteLink: function gislinkedit_GISEditService__deleteLink(payload) {
                    this.serviceXhr({
                        url: AlfConstants.PROXY_URI + "api/gislink/" + payload.groupId,
                        method: "DELETE",
                        data: {
                            displayName: payload.displayName
                        }
                    });
                }
            });
        });

