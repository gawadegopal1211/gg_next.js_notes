import Card from '@/components/card'
import Link from 'next/link'

export default function Notifications() {
    return (
        <Card>
            <h3>Notifications</h3>
            <Link href={'/parallel/archive'}>Archive Notifications</Link>
        </Card>
    )
}
