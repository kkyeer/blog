(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{547:function(l,_,e){"use strict";e.r(_);var i=e(2),v=Object(i.a)({},(function(){var l=this,_=l._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("p",[l._v("分布式邮件推送系统：")]),l._v(" "),_("ol",[_("li",[_("p",[l._v("前提：服务器NTP时间同步，误差不超过1秒")])]),l._v(" "),_("li",[_("p",[l._v("使用DB持久化存储JOB配置")])]),l._v(" "),_("li"),l._v(" "),_("li",[_("p",[l._v("任务重复执行：")]),l._v(" "),_("ol",[_("li",[l._v("服务器时间NTP同步")]),l._v(" "),_("li",[l._v("redis锁，key为JobGroup_JobName_TriggerGroup_TriggerName_yyyyMMddHHmmss,value为1")])])]),l._v(" "),_("li",[_("p",[l._v("长耗时任务均匀分布")])]),l._v(" "),_("li",[_("p",[l._v("配置更新后刷新")]),l._v(" "),_("ol",[_("li",[l._v("redis锁,key为Version_ID，value为1")])])]),l._v(" "),_("li")])])}),[],!1,null,null,null);_.default=v.exports}}]);