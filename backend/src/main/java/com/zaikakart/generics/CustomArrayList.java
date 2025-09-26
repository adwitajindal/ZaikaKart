package com.zaikakart.generics;

import java.util.ArrayList;

public class CustomArrayList {

    private int[] data;
    private static int DEFAULT_SIZE = 10;
    private int size = 0;

    public CustomArrayList() {
        this.data = new int[DEFAULT_SIZE];
    }

    public void add(int num) {
        if (isFull()) {
            resize();
        }
        data[size++] =
    }

    public static void main(String[] args) {
        ArrayList list = new ArrayList();
    }
}
