export type Plan = 'free' | 'pro' | 'team'

export interface BillingProvider {
    getCustomerPlan(params: { userId?: string; projectId?: string; email?: string }): Promise<Plan>
}

export class NoopBilling implements BillingProvider {
    async getCustomerPlan(): Promise<Plan> {
        return 'free'
    }
}

// Stripe-backed provider (stub)
import Stripe from 'stripe'
export class StripeBilling implements BillingProvider {
    private stripe: Stripe
    constructor(secretKey: string) {
        this.stripe = new Stripe(secretKey, { apiVersion: '2024-06-20' })
    }
    async getCustomerPlan(): Promise<Plan> {
        // TODO: Look up subscription by customer id and map to plan
        return 'pro'
    }
}
