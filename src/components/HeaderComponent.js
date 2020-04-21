import React from 'react'

function HeaderComponent() {
return (
<div>
<nav className="mb-4 navbar navbar-expand-lg navbar-dark unique-color-dark">
<a className="navbar-brand" href="#"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt=""/></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent-4">
<ul className="navbar-nav ml-auto">
<li className="nav-item active">
<a className="nav-link" href="#"><i className="fa fa-heart"></i> Follow <span className="sr-only">(current)</span></a>
</li>
<li className="nav-item">
<a className="nav-link" href="#"><i className="fa fa-thumbs-up"></i> Collaboration</a>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-newspaper-o"></i> Media </a>
<div className="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
<a className="dropdown-item" href="#">Facebook</a>
<a className="dropdown-item" href="#">Instagram</a>
</div>
</li>
</ul>
</div>
</nav>
</div>
)
}

export default HeaderComponent
