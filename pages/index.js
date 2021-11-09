import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter()
  const href = 'https://calendly.com/andrewrobles/pythontutoring'

  const title = "Andrew\'s Tutoring"
  
  return (
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Andrew's Hours</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Samir's Hours</a>
        </li>
      </ul>

    <div>
    <iframe className={styles.calendar} src="https://calendly.com/andrewrobles/pythontutoring"></iframe>
    </div>
    </div>
  )
}
