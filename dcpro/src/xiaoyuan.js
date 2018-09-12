import React, {Component} from 'react';
import './App.css';
import "./xiaoyuan.css"
import $ from 'jquery'
import {Layout, Menu, Breadcrumb,Row,Col,Icon} from 'antd';

const {Header, Content, Footer} = Layout;

class Xiaoyuan extends Component {
    constructor(props){
        super(props)
    }
act(){
    console.log($('#head div:nth-of-type(2) li a'));
}
    render() {
        return (
            <div className="App">
                {/*<h1>校园</h1>*/}
                <div className="tophead">
                    <Row>
                        <Col span={8} className='h_left'>
                            <li>
                                <a href="">大橙子</a>
                            </li>
                            <li>
                                <a href="">进入企业版</a>
                            </li>
                        </Col>
                        <Col span={8} offset={8} className='h_right'>
                            <li><a href="#">消息</a></li>
                            <li><a href="#">消息</a></li>
                            <li><a href="#">消息</a></li>
                            <li><a href="#">消息</a></li>
                            <li><a href="#">消息</a></li>
                        </Col>
                    </Row>
                </div>
                {/*head*/}
                <div id='head'>
                    <div id='logo'>
                        <a href="">大橙子</a>
                        <span>校园</span>
                    </div>
                   <div>
                      <li><a href="javascript:;mn" onClick={this.act.bind(this)}>首页</a></li>
                      <li><a href="">公司</a></li>
                      <li><a href="">校园</a></li>
                      <li><a href="">言值</a></li>
                   </div>
                    <div>
                        <Icon type="rollback" theme="outlined" />
                        <a href="#">返回</a>
                    </div>
                </div>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>Content</div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </div>
        );
    }
    /*
        生命周期函数
    */
    componentDidMount(){
        console.log($('#head div:nth-of-type(2) li a'));
        $('#head div:nth-of-type(2) li a').click(function () {
            console.log(5);
            console.log(this);
            this.css({
                borderBottom: "2px solid #00b38a"
            })
            return false;
        })
    }
    componentDidUpdate(){
        console.log(33);
    }
}

export default Xiaoyuan;
