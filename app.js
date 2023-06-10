const dday = new Date("2023-07-08:00:00:00+0900").getTime();

setInterval(function() {
  const today = new Date().getTime();
  const gap = dday - today;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));

  	document.getElementById("count").innerHTML = "정처기 3회차 D-" + day + "&nbsp;";
}, 1000);

/* CBT 사이트 -완료 */
function setCBT() { 
  const element = document.getElementById('div_Subscreen');
  element.innerHTML 
    = '<iframe width = "600px" height = "350px" src="https://www.comcbt.com/">CBT 사이트</iframe>';

  /* "주소"에 텍스트 추가 */
  const address_set = document.getElementById('address');
  address_set.innerHTML = ' > CBT 사이트';
} 

/* 정처기 실습 메뉴 - 완료*/
function setCoding() { 
  const element = document.getElementById('div_Subscreen');
  const image_path = 'images/codingSiteicon.png'; // 이미지의 소스 경로
  const link_url = 'https://ideone.com/'; // 클릭 시 이동할 링크 URL

  const imgElement = document.createElement('img');
  imgElement.src = image_path;

  const text1 = document.createTextNode('ideone');

  const brElement = document.createElement('br');

  const linkElement = document.createElement('a');
  linkElement.href = link_url;
  linkElement.target = '_blank'; // 새 창에서 링크를 열도록 설정
  linkElement.appendChild(imgElement);
  linkElement.appendChild(brElement);
  linkElement.appendChild(text1);

  element.innerHTML = '';
  element.appendChild(linkElement);

  /* "주소"에 텍스트 추가 */
  const address_set = document.getElementById('address');
  address_set.innerHTML = ' > 정처기 실습';
}

/* 공부 책 목록 메뉴 - 완료*/
function setBookList() { 
  const element = document.getElementById('div_Subscreen');
  element.innerHTML 
    = '<iframe width = "600px" height = "400px" src="https://search.shopping.naver.com/book/search?bookTabType=ALL&pageIndex=1&pageSize=40&query=%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC%20%EC%9E%90%EA%B2%A9%EC%A6%9D%20%EC%B1%85&sort=REL">자격증 책 목록</iframe>';

  /* "주소"에 텍스트 추가 */
  const address_set = document.getElementById('address');
  address_set.innerHTML = ' > 공부 책 목록';
} 

/* 공부 사이트 메뉴  - 완료*/
function setStudyCafe() { 
  const element = document.getElementById('div_Subscreen');
  const soojebi = 'https://cafe.naver.com/soojebi';
  const sinagong = 'https://www.sinagong.co.kr/'; 

  /*수제비 이미지 링크*/
  const imagePath_soojebi = 'images/soojebiicon.png';
  const soojebi_img = document.createElement('img');
  soojebi_img.src = imagePath_soojebi;

  /*시나공 이미지 링크*/
  const imagePath_sinagong = 'images/sinagongicon.jpg';
  const sinagong_img = document.createElement('img');
  sinagong_img.src = imagePath_sinagong;

  const brElement = document.createElement('br');

  /* 수제비 */
  const soojebi_link = document.createElement('a');
  soojebi_link.href = soojebi;
  soojebi_link.target = '_blank';
  soojebi_link.appendChild(soojebi_img);
  soojebi_link.appendChild(brElement);

  /* 시나공 */
  const sinagong_link = document.createElement('a');
  sinagong_link.href = sinagong;
  sinagong_link.target = '_blank';
  sinagong_link.appendChild(sinagong_img);


  element.innerHTML = '';
  element.appendChild(soojebi_link);
  element.appendChild(sinagong_link);  

  /* "주소"에 텍스트 추가 */
  const address_set = document.getElementById('address');
  address_set.innerHTML = ' > 공부 사이트';
} 

/* 필기 요약 정리 -완료 */
function setSummary() { /* 필기 요약 정리 -완료 */
  const element = document.getElementById('div_Subscreen');
  element.innerHTML 
    = '공사중';

  /* "주소"에 텍스트 추가 */
  const address_set = document.getElementById('address');
  address_set.innerHTML = ' > 필기 요약 정리';
} 

/* 주소창 메뉴 */
function setAddress() { 
  location.href = "index.html"
} 