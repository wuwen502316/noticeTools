import {_message} from "./message/message.js";
import notify from "./notify/notify.js";
import {confirm} from "./confirm/confirm.js";
import icon from "./units/icon.js";
import handleClass from "./handleClass/handleClass.js";
import handleAnimation from "./handleAnimation/handleAnimation.js";

let noticeTools = {
	message:_message,
	icon:icon,
	notify:notify,
	confirm:confirm,
	handleClass:handleClass,
	handleAnimation:handleAnimation
}
window.$NT = noticeTools;






