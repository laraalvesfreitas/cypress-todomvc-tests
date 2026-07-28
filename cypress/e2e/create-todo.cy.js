describe('Test create-todo', () => {
  beforeEach(() => {
    cy.openTodoMvc()
  })

  it.only('should create a new todo', () => {
    cy.fixture("todo").then((todo) => {

      cy.get('[data-testid="text-input"]')
        .click()
        .type(`${todo.task1}{enter}`)

      cy.contains(todo.task1)
        .should('be.visible')
    })
  })
})