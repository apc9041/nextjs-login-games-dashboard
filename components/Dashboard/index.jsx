import Image from 'next/image'
const Dashboard = () => {

  return(
  <>
    <h2 className="title is-2">Main Game</h2>
    <Image src="/next-js.png" alt="me" width="300" height="120" />
    <p>by Phaser</p>
  
  </>)
};

export default Dashboard;
