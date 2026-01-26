// Linked List Patterns Deep Dive
// Pattern 1: Fast & Slow Pointer (Floyd's Cycle Detection)
// This is one of the most elegant patterns in computer science.
// The Technique:

// Two pointers start at the head
// Slow pointer moves 1 step at a time
// Fast pointer moves 2 steps at a time
// If there's a cycle, they'll eventually meet
// If no cycle, fast pointer reaches the end

// GO TO LEETCODE 141