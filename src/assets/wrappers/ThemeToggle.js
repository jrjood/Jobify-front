import styled from 'styled-components';

const Wrapper = styled.button`
  background: transparent;
  border-color: transparent;
  width: 3.5rem;
  height: 2rem;
  display: grid;
  place-items: center;
  cursor: pointer;

  .toggle-icon {
    font-size: 1.3rem;
    color: var(--text-color);
    position: absolute;
    transition: all 0.3s ease;
  }

  .hide {
    opacity: 0;
    transform: scale(0);
  }
`;

export default Wrapper;
