import { useState } from 'react';

import ImageList from './Components/ImageList'
import searchImages from './api'
import SearchBar from './Components/SearchBar';


function App() {
  const [data, setData] = useState('')

  const handleSubmit = async (term) => {
    const data = await searchImages(term)

    setData(data)

  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />

      <ImageList images={data} />
    </div>
  );
}

export default App;
