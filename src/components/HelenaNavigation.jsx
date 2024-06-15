//import '../dashboard.css';

export const HelenaNavigation = ({ selectedItem, handleNavItemSelect }) => {
    return (
    <>
      <a className={selectedItem === 'dashboard' ? 'active' : ''} onClick={() => handleNavItemSelect('dashboard')}>Helena</a>
      <a className={selectedItem === 'territories' ? 'active' : ''} onClick={() => handleNavItemSelect('territories')}>Grupos</a>
      <a className={selectedItem === 'subterritories' ? 'active' : ''} onClick={() => handleNavItemSelect('subterritories')}>Territorios</a>
      <a className={selectedItem === 'registers' ? 'active' : ''} onClick={() => handleNavItemSelect('registers')}>Registros</a>
      <a className={selectedItem === 'reports' ? 'active' : ''} onClick={() => handleNavItemSelect('reports')}>Reportes</a>
    </>
  );
}