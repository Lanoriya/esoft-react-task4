import { Link } from "react-router-dom"

export function Header() {
  return (
    <div className="header">
      <ul className="header-ul">
        <li className="header-ul-li"><Link to='/' className='header-link'>Task 1</Link></li>
        <li className="header-ul-li"><Link to='/task2' className='header-link'>Task 2</Link></li>
        <li className="header-ul-li"><Link to='/task3' className='header-link'>Task 3</Link></li>
      </ul>
    </div>
  )
}
