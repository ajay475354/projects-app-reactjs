import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabeId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabeId(tabId)
  }

  const styling = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={` tab-btn ${styling}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
