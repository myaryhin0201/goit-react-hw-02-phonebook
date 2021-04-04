// Компоненты
import Profile from './components/Profile/Profile';
import Layout from './components/Layouts/Layouts';
// данные
import socialProfiles from './json/social-profile.json';

function App() {
  return (
    <Layout>
      <h1>Please leave feedback</h1>
      <Profile
        name={socialProfiles.name}
        tag={socialProfiles.tag}
        location={socialProfiles.location}
        avatar={socialProfiles.avatar}
        stats={socialProfiles.stats}
      />
    </Layout>
  );
}

export default App;
