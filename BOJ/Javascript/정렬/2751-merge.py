import sys

def merge(left, right):
    sorted_arr = []
    i = j = 0
    # i -> left 현재 위치, j -> right 현재 위치

    # 두 배열 요소 비교하면서 더 작은 값을 sorted_arr에 추가
    # 한 배열의 요소를 모두 처리하면 루프 종료
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            sorted_arr.append(left[i])
            i += 1
        else:
            sorted_arr.append(right[j])
            j += 1
    # 남아있는 요소를 sorted_arr에 추가(한 배열이 먼저 끝난 경우)
    sorted_arr.extend(left[i:])
    sorted_arr.extend(right[j:])
    return sorted_arr

def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def main():
    input = sys.stdin.read if sys.platform == 'linux' else open('/Users/shinhayeong/Desktop/Problem_Solving/test.txt').read
    data = input().strip().split('\n')
    
# 입력 파싱
    n = int(data[0]) if data else 0  # 입력이 없을 경우 처리
    if n == 0:
        print("")
        return
    arr = list(map(int, data[1:]))
    
    # 중복 제거
    unique_arr = list(set(arr))
    
    # 정렬
    sorted_arr = merge_sort(unique_arr)
    
    # 출력
    sys.stdout.write('\n'.join(map(str, sorted_arr)) + '\n')

if __name__ == "__main__":
    main()
