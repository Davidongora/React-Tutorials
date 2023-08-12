const Navbar = () => {
    return ( 
        <nav className="navabar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/"></a>
                <a href="/create"
                //  style={{
                //     color:"white",
                //     backgroundColor: '#f5136d',
                //     borderRadius: '8px'
                // }} INLINE-STYLING
                >
                New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;

