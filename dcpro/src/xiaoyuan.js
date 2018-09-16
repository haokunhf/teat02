import React, {Component} from 'react';
import './App.css';
import "./xiaoyuan.css"
import $ from 'jquery'
import Mock from 'mockjs'
import {Layout, Menu, Row, Col, Icon, Carousel, Input, Tabs, List, Card} from 'antd';

const {Footer} = Layout;

/*
 三级列表
 * */
const
    SubMenu = Menu.SubMenu;
const
    MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

function

handleClick(e) {
    console.log('click', e);
}

/*
tab选项卡
* */
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

/* main2 list页*/
const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    },
    {
        title: 'Title 6',
    }
];
const xydata1=Mock.mock({
    'user_xy|15-20':[
        {
            "id|+1":0,

        }
        ]
})
Mock.mock("http://www.chkhf.com","post",function (req) {
     console.log(req.body);
     if (req.body==1){
        return xydata1
     }
})
class Xiaoyuan extends Component {
    constructor(props) {
        super(props)
    }

    act() {
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
                        <Icon type="rollback" theme="outlined"/>
                        <a href="#">返回</a>
                    </div>
                    {/*内容*/}
                </div>
                <section id='ssou'>
                    <div>
                        <Search
                            placeholder="请输入公司名称/公司名"
                            enterButton="搜索"
                            size="large"
                            onSearch={value => console.log(value)}
                            style={{width: 600}}
                        />
                    </div>
                    <div>
                        <p>相关搜索：</p>
                        <a>2018/5/88</a>
                        <a>2018/5/88</a>
                        <a>2018/5/88</a>
                        <a>2018/5/88</a>
                        <a>2018/5/88</a>
                    </div>
                </section>
                <div id='section_main'>
                    <section className='main'>
                        <Menu onClick={handleClick} style={{width: 256}} mode="vertical">
                            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Iteom 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4"
                                     title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                        <div id='swiper'>
                            <div>
                                <Carousel autoplay>
                                    <div><h3>1</h3></div>
                                    <div><h3>2</h3></div>
                                    <div><h3>3</h3></div>
                                    <div><h3>4</h3></div>
                                </Carousel>,
                            </div>
                            <div className="tab">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </div>

                        </div>
                    </section>
                    <section className='main1'>
                        <Tabs defaultActiveKey="1"  onChange={callback} >
                            <TabPane tab="北京" key="1" >
                                <div className='tabsec'>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    <li>
                                        <div>3</div>
                                        <h4>小红书</h4>
                                    </li>
                                    {/*路由*/}

                                </div>
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                                <div className='tabsec'>

                                </div>
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                                <div className='tabsec'>
                                </div>
                            </TabPane>
                            <TabPane tab="Tab 4" key="4">Content of Tab Pane 3</TabPane>
                            <TabPane tab="Tab 5" key="5">Content of Tab Pane 3</TabPane>
                            <TabPane tab="Tab 6" key="6">Content of Tab Pane 3</TabPane>
                            <TabPane tab="Tab 7" key="7">Content of Tab Pane 3</TabPane>
                        </Tabs>
                        <Xqing/>
                    </section>
                    <section className='main2'>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Tab 1" key="1" >
                                <List
                                    grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 3}}
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item>
                                            <Card title={item.title} className='m2_list'>Card content</Card>
                                        </List.Item>
                                    )}
                                />
                            </TabPane>
                            <TabPane tab="Tab 2" key="2" >
                                <List
                                    grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 3}}
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item >
                                            <Card title={item.title} className='m2_list'>Card content</Card>
                                        </List.Item>
                                    )}
                                />
                            </TabPane>
                        </Tabs>

                    </section>
                    <section className='main3'>
                        <h1><span>活动广场</span></h1>
                        <ul>
                            <li><a href="">
                                <span>2</span></a>
                            </li>
                            <li><a href="">3</a></li>
                            <li><a href="">4</a></li>
                            <li><a href="">5</a></li>
                        </ul>
                    </section>
                </div>

                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </div>
        );
    }

    /*
        生命周期函数
    */
    componentDidMount() {
        console.log($('.tab li'));
        $.ajax({
            url:"http://www.chkhf.com",
            type:"post",
            dataType:"json",
            data:{id:1},
            success:function (data) {
                console.log(data);
            }
        })
    }

    componentDidUpdate() {
        console.log(33);
    }
}

/*
* 子组件*/
class Xqing extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='detail'>
                <h1>434</h1>
                <div className='deD'>
                    <dl>
                        <dd>1</dd>
                        <dt>D轮及以上</dt>
                    </dl>
                    <dl>
                        <dd>1</dd>
                        <dt>D轮及以上</dt>
                    </dl>
                    <dl>
                        <dd>1</dd>
                        <dt>D轮及以上</dt>
                    </dl>
                </div>
                <p>与世界飞向你的没</p>
                <ul className='imglist'>
                    <li><img src="" alt=""/>1</li>
                    <li><img src="" alt=""/>2</li>
                    <li><img src="" alt=""/>3</li>
                    <li><img src="" alt=""/>4</li>

                </ul>
            </div>
        )
    }

}

export default Xiaoyuan;
