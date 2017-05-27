import Link from 'next/link'

const Test = () => {
  return(
    <div>
      <h1>Post</h1>
      <Link prefetch href='/'><a>Index</a></Link>
    </div>
  );
}

export default Test;
