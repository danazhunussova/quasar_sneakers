import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import MainLayout from '../../src/layouts/MainLayout.vue';
import Cardlist from '../../src/components/Cardlist.vue'; // Import Card component if needed
import Card from '../../src/components/Card.vue'

describe('IndexPage.vue', () => {
  it('adds and removes items from cart', async () => {
    const wrapper = mount(MainLayout);
    await wrapper.vm.$nextTick()

    const cardlistComponent = wrapper.findComponent(Cardlist)
    const firstCard = wrapper.findComponent(Card)
    const addButton = wrapper.find("img.add-to-cart-button")
    const initialTotalPrice = wrapper.vm.totalPrice
    
    //await wrapper.vm.$nextTick()

/*
    const mockItem = { id: 1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999 };

    // Simulate adding an item to the cart
    const addButton = wrapper.find('img.add-to-cart-button');
    await addButton.trigger('click');
    await wrapper.vm.$nextTick();

    // Check if the addToCart function was called with the mock item
    expect(wrapper.vm.$options.methods.addToCart).toHaveBeenCalledWith(mockItem);

    // Optionally, check if the UI reflects that the item is in the cart
    // For example, if the button icon changes when an item is added
    expect(addButton.attributes('src')).toContain('checked.svg');

    // Simulate removing the item from the cart
    await addButton.trigger('click');
    await wrapper.vm.$nextTick();

    // Check if the removeFromCart function was called with the mock item
    expect(wrapper.vm.$options.methods.removeFromCart).toHaveBeenCalledWith(mockItem);

    // Optionally, check if the UI reflects that the item is removed
    expect(addButton.attributes('src')).toContain('plus.svg'); */
  });
});
