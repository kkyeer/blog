(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{624:function(e,l,_){"use strict";_.r(l);var i=_(6),v=Object(i.a)({},(function(){var e=this,l=e.$createElement,_=e._self._c||l;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("分布式邮件推送系统：")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("前提：服务器NTP时间同步，误差不超过1秒")])]),e._v(" "),_("li",[_("p",[e._v("使用DB持久化存储JOB配置")])]),e._v(" "),_("li"),e._v(" "),_("li",[_("p",[e._v("任务重复执行：")]),e._v(" "),_("ol",[_("li",[e._v("服务器时间NTP同步")]),e._v(" "),_("li",[e._v("redis锁，key为JobGroup_JobName_TriggerGroup_TriggerName_yyyyMMddHHmmss,value为1")])])]),e._v(" "),_("li",[_("p",[e._v("长耗时任务均匀分布")])]),e._v(" "),_("li",[_("p",[e._v("配置更新后刷新")]),e._v(" "),_("ol",[_("li",[e._v("redis锁,key为Version_ID，value为1")])])]),e._v(" "),_("li")])])}),[],!1,null,null,null);l.default=v.exports}}]);