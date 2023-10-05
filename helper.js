function ptInCircle(x1,y1,x,y,r){
  if (dist(x1, y1, x, y) < r){
    return true;
  }else{
    return false;
  }
}
function dist(x1,x2,y1,y2){
  let distance = Math.sqrt((x1-x2)** 2+(y1-y2)**2);
  return distance;
}