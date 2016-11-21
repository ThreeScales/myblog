import React from 'react';
import touxiang from '../../img/touxiang.jpg';
import addressIcon from '../../img/addressw.png';

class Index extends React.Component{
	render(){
		return(
		    <div className="willerce">
      			<img className="avatar" src={touxiang} />
                <h1>张有明</h1>
                <p>工作 @ 北京小牛微微信息技术有限公司
                    <a href="#">About Me</a>
                </p>
                <p className="address">
                    <img src={addressIcon} />中国北京
                </p>
                <p className="nav">
                    <a href="#/articles/1">前端</a>
                    <a href="#/articles/2">后端</a>
                    <a href="#/articles/3">随笔</a>
                    <a href="#">档案</a>
                </p>
            </div>	 
		)
	}
}

export default Index