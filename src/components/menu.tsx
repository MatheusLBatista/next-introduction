import Link from "next/link";

export default function Menu() {

  return (
    <nav>
      <ul>
        {/* link é o mesmo que a tag a, porém sem refresh */}
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/refeicoes">Refeições</Link></li>
      </ul>
    </nav>
  )
}