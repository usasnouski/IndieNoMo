export const createContribution = (contribution) => {
  return $.ajax(
    method: 'POST',
    url: 'api/contributions',
    data: { contribution },
  )
}
