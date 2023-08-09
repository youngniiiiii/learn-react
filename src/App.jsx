import RootLayout from './layout/RootLayout'
import Home from './pages/Home'

// {/* 홈 페이지 : index.html */}
// {/* 소개 페이지 : about.html */}
// {/* 제품 목록 페이지 : products.html */}
// {/* 의뢰 페이지 : contact.html */}

function App() {
  return (
    <div className="App">
      <RootLayout>
        <Home />
      </RootLayout>
    </div>
  )
}

export default App
