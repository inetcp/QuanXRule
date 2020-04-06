/*
iqy unlock vip

QX:
^http?:\/\/cmonitor\.iqiyi\.com\/apis\/user\/secure_check_vip\.action url script-response-body inetcp/Script/iqyvip.js

*/

var body = $response.body;

// {"msg":"不是会员","code":"Q00305"}
let obj = JSON.parse(body);
obj['msg'] = 'OK';
obj['code'] = 'Q00000';
body = JSON.stringify(obj);

$done({body});