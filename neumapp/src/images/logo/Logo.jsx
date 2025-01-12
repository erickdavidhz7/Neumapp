/* Esta es la manera como lo pueden utilizar en sus:

 <Logo width={30} color="#4036ED" /> 
 
 */

const Logo = (props) => {
    return (
      <svg
        width={props.width}
        height={props.width}
        viewBox="0 0 93 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M63.4766 84.9705C73.0376 84.9705 80.7883 67.7466 80.7883 46.4999C80.7883 25.2532 73.0376 8.0293 63.4766 8.0293"
          stroke={props.color}
          strokeWidth="5.775"
        />
        <path
          d="M46.1646 46.4999C46.1646 67.7466 38.4138 84.9705 28.8528 84.9705C19.2918 84.9705 11.541 67.7466 11.541 46.4999C11.541 25.2532 19.2918 8.0293 28.8528 8.0293C38.4138 8.0293 46.1646 25.2532 46.1646 46.4999Z"
          stroke={props.color}
          strokeWidth="5.775"
        />
        <path
          d="M28.853 84.9705C38.4141 84.9705 46.1648 67.7466 46.1648 46.4999C46.1648 25.2532 38.4141 8.0293 28.853 8.0293"
          stroke={props.color}
          strokeWidth="5.775"
        />
        <path
          d="M34.6235 46.5003C34.6235 59.2484 32.0399 69.5827 28.8529 69.5827C25.6659 69.5827 23.0823 59.2484 23.0823 46.5003C23.0823 33.7523 25.6659 23.418 28.8529 23.418C32.0399 23.418 34.6235 33.7523 34.6235 46.5003Z"
          stroke={props.color}
          strokeWidth="5.775"
        />
        <path
          d="M28.853 8.0293L63.4766 8.0293"
          stroke={props.color}
          strokeWidth="5.775"
        />
      </svg>
    );
  };
  
  export default Logo;