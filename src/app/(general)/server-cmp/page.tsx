import { serverUtils } from '@/app/utils/server-utils'

export default function ServerCmp() {
  const result = serverUtils();
  
  return (
    <div>
      <h2>Server Route</h2>
      <p>{result}</p>
    </div>
  )
}
