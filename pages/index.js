import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter()
  const href = 'https://calendly.com/andrewrobles/pythontutoring'

  return (
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Andrew's Hours</a>
        </li>
        <Tab text={"Samir's Hours"}/>
      </ul>

    <div>
    <iframe className={styles.calendar} src={href}></iframe>
    </div>
    </div>
  )
}

function Tab(props) {
  const onTabClick = () => {
    alert('Clicked on tab')
  }
  return (
    <li class="nav-item">
      <a class="nav-link" href="#" onClick={onTabClick}>{props.text}</a>
    </li>
  )
}
