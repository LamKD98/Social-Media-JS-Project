import './ErrorPage.css'

const ErrorPage = () => {
    return ( 
        <>
        <img className="error-page-logo" src="../Images/Logo.png" width="80" height="80"/>
        <div className="error-page">
        <h1>Access Restricted</h1>
        <h2>Please return to the home page to log-in or create an account!</h2>
        </div>
        </>

     );
}
 
export default ErrorPage;