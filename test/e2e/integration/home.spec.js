describe('Sample tests', () => {
  it('Visits index page', () => {
    cy.visit('/')
    cy.contains('h1', 'NUXT + TypeScript + Vuetify')
  })

  it('increase counter', () => {
    cy.get('[type="text"]').type('10') // Type 'Hello, World' into the 'input'
    cy.get('[type="button"]').click()

    cy.contains('.v-alert.success div', '25')
  })
})
