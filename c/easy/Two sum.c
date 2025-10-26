#include <stdio.h>

void twoSum(int nums[], int numsSize, int target)
{
    for (int i = 0; i < numsSize; i++)
    {
        for (int j = i + 1; j < numsSize; j++)
        {
            if (nums[i] + nums[j] == target)
            {
                printf("[%d, %d]\n", i, j);
                return;
            }
        }
    }
    printf("[]\n");
}

int main()
{
    int nums[] = {2, 7, 11, 15};
    int target = 9;
    int size = sizeof(nums) / sizeof(nums[0]);
    twoSum(nums, size, target);
    return 0;
}
