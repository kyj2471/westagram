import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  render() {
    return (
    <div className="container">
      
      <div className="nav">
        <div className="nav_logo">westagram</div>
        <div className="nav_searchBar"><input type="search" placeholder="검색"></input></div>
        <div className="nav_item">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>

      <div className="super_main">
        <div className="main_left">
          <div className="left_top">
            <div className="story_one">
              <img src="../../../public/images/yj.png" alt="#" width="85" height="85"></img>
            </div>
            <div className="story_name">
              <span>yjnim</span>
            </div>
          </div>
          <div className="feeds">
            <div className="feeds_top">
              <img src="/images/yeongjae/yj.png" alt="#" width="65" height="65"></img>
                <div className="feeds_top_left">
                  <div className="img_id">kingyjnim</div>
                  <div className="img_ex">행복</div>
                </div>
                <div className="img_imo"><i class="far fa-star"></i></div>
            </div>
            <div className="feeds_img"><img src="/images/yeongjae/ciga.png" alt="ciga" width="780" height="700"></img></div>
            <div className="feeds_imo">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
              <div className="feeds_imo_right">
                <i className="far fa-bookmark"></i>
              </div>
            </div>
            <div className="feeds_write"></div>
              <div className="comment">
                <input type="text" className="add_comment" placeholder="댓글달기.."></input>
                <button className="add_button">게시</button>
              </div>
          </div>
        </div>

        <div className="main_right">
          <div className="main_right_top">
            <div className="main_right_top_img">
              <img src="/images/yeongjae/yj.png" alt="#" width="85" height="85"></img>
            </div>
              <div className="main_right_top_name">
                <div>kimgyjnim</div>
                <div className="right_top_myName">김영재</div>
              </div>
              <div className="main_right_top_tag">전환</div>
          </div>
          <div className="main_right_bottom">
            <div className="main_right_bottom_recommend">회원님을 위한 추천</div>
            <div className="main_right_bottom_show">모두 보기</div>
          </div>
          <div className="footer">
            <div>소개.도움말.홍보 센터.API.채용 정보.개인정보처리방침</div>
            <div>약관.위치.인기계정.해시태그.언어</div>
            <div>© 2020 INSTAGRAM FROM FACEBOOK</div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Main;