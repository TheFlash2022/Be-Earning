import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../App";
import {
  BellOutlined,
  LoginOutlined,
  LogoutOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";

export default function BT3() {
  return (
    <div className="">
      <div className="header">
        <div className="header-left">
          <img
            src="https://static.toiimg.com/photo/msid-87653100/87653100.jpg?32996"
            alt="..."
          />
          <div>
            <h5>Minh Nguyen</h5>
            <p>@meta</p>
          </div>
        </div>

        <div className="icons">
          <button className="icon_login">
            <LoginOutlined />
          </button>
          <button className="icon_logout">
            <LogoutOutlined />
          </button>
          <button className="icon_notification">
            <BellOutlined />
          </button>
        </div>
      </div>

      <div className="body">
        <div className="bodyTop">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="My Wallet" key="1">
              <div className="wallet">
                <div className="list">
                  <div className="item item1">
                    <div className="square"></div>
                    <p>@Meta Wallet</p>
                    <b>90,500 MCOIN</b>
                  </div>
                  <div className="item item2">
                    <div className="square"></div>
                    <p>@Metanode Wallet</p>
                    <b>90,500 MCOIN</b>
                  </div>
                  <div className="item item3">
                    <div className="square"></div>
                    <NavLink to="/createnewwallet">
                      <button className="btn btn-info">
                        <PlusOutlined />
                        <p>Create New Wallet</p>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Report" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Setting" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="bodyBottom">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Transactions" key="1">
              <div className="list">
                <div className="item">
                  <img
                    src="https://media.vanityfair.com/photos/6334b1e5de6ed352605cedd7/master/w_2560%2Cc_limit/1228756580"
                    alt="..."
                  />
                  <b>Eric R Hopper</b>
                  <p>3 hours ago</p>
                  <span>-850USDT</span>
                </div>
                <div className="item item2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Official_portrait_of_Barack_Obama.jpg/800px-Official_portrait_of_Barack_Obama.jpg"
                    alt="..."
                  />
                  <b>Melissa S Booker</b>
                  <p>3 hours ago</p>
                  <span>+850USDT</span>
                </div>
                <div className="item">
                  <img
                    src="https://znews-stc.zdn.vn/static/topic/person/messi.jpg"
                    alt="..."
                  />
                  <b>Andy Lau</b>
                  <p>3 hours ago</p>
                  <span>-80USDT</span>
                </div>
                <div className="item">
                  <img
                    src="https://vcdn1-thethao.vnecdn.net/2022/10/04/-9295-1664853128.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=wEm0ZUL2DdGikh24J0cPPw"
                    alt="..."
                  />
                  <b>Eric R Hopper</b>
                  <p>3 hours ago</p>
                  <span>-850USDT</span>
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Pending" key="2">
              pending
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <i class="fa fa-angle-up"></i>
          <div className="list">
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
            <div className="item">
              <div className="square">
                <i class="fa fa-braille"></i>
              </div>
              <p>DApp Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
