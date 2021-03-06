import React from 'react';
import touxiang from '../../img/touxiang.jpg';
import axios from 'axios';
import qs from 'qs';

class Comment extends React.Component {
	constructor(props) {
		super(props);
	}

	submitComment() {
		let that = this;
		let userName = document.getElementById("userName").value;
		if (this.trim(userName) == '') {
			document.getElementById("userName").value = '';
			document.getElementById("userName").focus();
			return;
		}

		let userEmail = document.getElementById("userEmail").value;
		if (this.trim(userEmail) == '') {
			document.getElementById("userEmail").value = '';
			document.getElementById("userEmail").focus();
			return;
		}
		if (userEmail.indexOf('@') == -1) {
			document.getElementById("userEmail").value = '';
			document.getElementById("userEmail").placeholder = 'Please enter your vaild email!';
			document.getElementById("userEmail").focus();
			return;
		}

		let content = document.getElementById("commentContent").value;
		if (this.trim(content) == '') {
			document.getElementById("commentContent").value = '';
			document.getElementById("commentContent").focus();
			return;
		}
		let articleId = document.getElementById("articleId").value;

		let commentFlag = document.getElementById("commentFlag").value;

		let toUserName = document.getElementById("toUserName").value;

		let toCommentId = document.getElementById("toCommentId").value;
		axios.post('/api/comment/addComment', qs.stringify({
			articleId: articleId,
			userName: userName,
			content: content,
			userEmail: userEmail,
			commentFlag: commentFlag,
			toUserName: toUserName,
			toCommentId: toCommentId,
		})).then(function (response) {
			let data = response.data;
			if (data.success) {
				document.getElementById("userName").value = '';
				document.getElementById("commentContent").value = '';
				document.getElementById("userEmail").value = '';
				that.props.parentComponent.getComments(articleId);
			} else {
				//后台报错处理逻辑
			}
		});
	}

	trim(s) {
		return s.replace(/(^\s*)|(\s*$)/g, "");
	}

	cancelReply() {
		document.getElementById("commentFlag").value = "0";
		document.getElementById("toUserName").value = "";
		document.getElementById("toCommentId").value = "";
		document.getElementById("cancelReply").innerHTML = "";
	}

	render() {
		return (
			<div className="comment-respond">
				<form className="comment-form">
					<h3>发表评论
					<small>
						<a id="cancelReply" onClick={this.cancelReply.bind(this)}></a>
					</small>
				</h3>
					<div className="half">
						<input name="name" placeholder="称呼" className="name" required id="userName" />
					</div>
					<div className="half right-half">
						<input name="emailaddress" placeholder="邮箱" className="email" type="email" required id="userEmail" />
					</div>
					<textarea rows="4" cols="50" name="subject" placeholder="留言内容" className="message" id="commentContent" required></textarea>
					<button name="button" className="btn" type="button" value="Send" onClick={this.submitComment.bind(this)} >发表留言</button>
				</form>
			</div>
		)
	}
}

export default Comment