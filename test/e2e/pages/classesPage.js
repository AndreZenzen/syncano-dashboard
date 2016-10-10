import utils from '../utils';

export default {
  elements: {
    classesListMenu: {
      selector: '//div[@class="classes-list"]/div[1]/div[@class="col-menu"]//button',
      locateStrategy: 'xpath'
    },
    addClassButton: {
      selector: '[data-e2e="classes-add-button"]'
    },
    createModalNameInput: {
      selector: 'input[name=class]'
    },
    createModalFieldNameInput: {
      selector: 'input[name=fieldName]'
    },
    createModalDropdownType: {
      selector: '//div[@class="fieldType-dropdown"]/div/div',
      locateStrategy: 'xpath'
    },
    createModalDescriptionInput: {
      selector: 'input[name="description"]'
    },
    confirmButton: {
      selector: '[data-e2e="class-dialog-confirm-button"]'
    },
    addButton: {
      selector: '[data-e2e="class-add-field-button"]'
    },
    classTableRows: {
      selector: '//div[@class="classes-list"]/div[2]/div',
      locateStrategy: 'xpath'
    },
    classTableRow: {
      selector: `//div[text()="${utils.addSuffix('class')}"]`,
      locateStrategy: 'xpath'
    },
    userProfileClassName: {
      selector: '[data-e2e="user_profile-list-item-name"]'
    },
    selectUserClass: {
      selector: '[data-e2e="user_profile-check-icon"]'
    },
    userClassListItem: {
      selector: '[data-e2e="user_profile-data-objects"]'
    },
    userClassDropDown: {
      selector: '//div[text()="user_profile"]/../../../../div[@class="col-menu"]//button',
      locateStrategy: 'xpath'
    },
    classToSelect: {
      selector: '//span[@class="synicon-checkbox-blank-outline"]',
      locateStrategy: 'xpath'
    },
    classTableRowDescription: {
      selector: `div[data-e2e="${utils.addSuffix('class')}-list-item-description"]`
    },
    classTableName: {
      selector: `div[data-e2e="${utils.addSuffix('class')}-list-item-name"]`
    },
    inactiveDeleteButton: {
      selector: '//div[text()="Delete"]/..',
      locateStrategy: 'xpath'
    },
    confirmDeleteButton: {
      selector: '//span[text()="Confirm"]',
      locateStrategy: 'xpath'
    },
    addClassTitle: {
      selector: '//h3[text()="Add a Data Class"]',
      locateStrategy: 'xpath'
    },
    editClassTitle: {
      selector: '//span[text()="Update a Data Class"]',
      locateStrategy: 'xpath'
    },
    deleteClassModalTitle: {
      selector: '//h3[text()="Delete a Data Class"]',
      locateStrategy: 'xpath'
    },
    checkboxSelected: {
      selector: '//span[@class="synicon-checkbox-marked-outline"]',
      locateStrategy: 'xpath'
    },
    classesListItemDropDown: {
      selector: `//div[text()="${utils.addSuffix('class')}"]/../../../
        following-sibling::div//span[@class="synicon-dots-vertical"]`,
      locateStrategy: 'xpath'
    },
    editButton: {
      selector: '//div[text()="Edit"]',
      locateStrategy: 'xpath'
    },
    deleteButton: {
      selector: '//div[text()="Delete"]',
      locateStrategy: 'xpath'
    },
    summaryDialogCloseButton: {
      selector: '[data-e2e="class-summary-dialog-close-button"]'
    }
  }
};
