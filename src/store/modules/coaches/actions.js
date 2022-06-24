export default {
    registerCoach(context, data) {
        const coachId = context.rootGetters.userId
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            areas: data.areas,
            description: data.desc,
            hourlyRate: data.rate
        }
        const token = context.rootGetters.token

        fetch(`https://vue-http-demo-6d20d-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${coachId}.json?auth=` + token, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        })
        coachData.id = coachId
        context.commit('registerCoach', coachData)
    },
    async loadCoaches(context, payload) {
        if (!payload.forcedRefresh && !context.getters.shouldUpdate) {
            return false
        }

        const response = await fetch(`https://vue-http-demo-6d20d-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`)

        const responseData = await response.json()

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch')
            throw error
        }

        const coaches = []

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                areas: responseData[key].areas,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate
            }

            coaches.push(coach)
        }

        context.commit('setCoaches', coaches)
        context.commit('setFetchTimestamp')
    }
}