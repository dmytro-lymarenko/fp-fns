/**
 * [ternar description]
 * @param  {[type]} condition      [description]
 * @param  {[type]} trueStatement  [description]
 * @param  {[type]} falseStatement [description]
 * @return {[type]}                [description]
 */
export default function ternar(condition, trueStatement, falseStatement) {
	return data => condition(data) ? trueStatement(data) : falseStatement(data);
}
