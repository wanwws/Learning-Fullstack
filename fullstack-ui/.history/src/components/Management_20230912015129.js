import { Menu } from "antd";

const Management = () => {
  return(
    <div import React from 'react'
    import renderer from 'react-test-renderer'
    import { Provider } from 'react-redux'
    
    import store from '~/store'
    import { Management } from '../Management'
    
    describe('<Management />', () => {
      const defaultProps = {}
      const wrapper = renderer.create(
        <Provider store={store}>
         <Management {...defaultProps} />
        </Provider>,
      )
    
      test('render', () => {
        expect(wrapper).toMatchSnapshot()
      })
    })>
      <Menu 
        items={[
          {label: "Home"},
          {label: "Management Flower"},
          {label: "Flower List"},
          {label: "Report"},
          {label: "Profile"},
          {label: "Signout"},
        ]}
      />
      <div>Content</div>
    </div>
  );
}

export default Management;